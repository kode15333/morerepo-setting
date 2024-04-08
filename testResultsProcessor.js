const {glob} = require("glob");
const fs = require("fs");

// 'packages/**/report.json' 파일들을 찾습니다.
const pattern = "packages/**/report.json";

async function getReportFiles() {
    const files = glob.sync(pattern);

    const mergedData = [];

    files.forEach((file) => {
        // 각 파일의 내용을 읽습니다.
        const content = fs.readFileSync(file, "utf8");

        try {
            const jsonData = JSON.parse(content);

            if (mergedData.length === 0) {
                mergedData.push(jsonData);
                return;
            }

            const testResults = jsonData.testResults;
            const mergedTestResults = mergedData[0].testResults;

            mergedTestResults.push(...testResults);



        } catch (parseError) {
            console.error(`Error parsing JSON from ${file}:`, parseError);
        }
    });


    fs.writeFileSync(
        "merged-report.json",
        JSON.stringify(mergedData[0], null, 2),
        "utf8",
    );

    console.log(`Merged ${files.length} files into merged-report.json`);
}

getReportFiles();
