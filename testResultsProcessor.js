const {glob} = require("glob");
const fs = require("fs");

// 'packages/**/report.json' 파일들을 찾습니다.
const pattern = "packages/**/report.json";

async function getReportFiles() {
    const files = glob.sync(pattern);

    let mergedData = null;

    files.forEach((file) => {
        // 각 파일의 내용을 읽습니다.
        const content = fs.readFileSync(file, "utf8");

        try {
            const jsonData = JSON.parse(content);

            if (mergedData === null) {
                mergedData = jsonData;
                return;
            }

            const testResults = jsonData.testResults;

            const mergedTestResults = mergedData.testResults;

            mergedData.coverageMap = {
                ...mergedData.coverageMap,
                ...jsonData.coverageMap,
            }

            mergedTestResults.push(...testResults);



        } catch (parseError) {
            console.error(`Error parsing JSON from ${file}:`, parseError);
        }
    });


    fs.writeFileSync(
        "merged-report.json",
        JSON.stringify(mergedData, null, 2),
        "utf8",
    );

    console.log(`Merged ${files.length} files into merged-report.json`);
}

getReportFiles();
