const {glob} = require("glob");
const fs = require("fs");

// 'packages/**/report.json' 파일들을 찾습니다.
const pattern = "packages/**/report.json";

async function getReportFiles() {
    const files = glob.sync(pattern);

    let mergeData = null;

    files.forEach((file) => {
        // 각 파일의 내용을 읽습니다.
        const content = fs.readFileSync(file, "utf8");

        try {
            const jsonData = JSON.parse(content);

            if (mergeData === null) {
                mergeData = jsonData;
                return;
            }


            Object.keys(mergeData).forEach((key) => {

                try {
                    if (typeof mergeData[key] === "number") {
                        mergeData[key] += jsonData[key];
                        return;
                    }

                    if (Array.isArray(mergeData[key])) {
                        mergeData[key].push(...jsonData[key]);
                        return;
                    }

                    if (typeof mergeData[key] === "object") {
                        mergeData[key] = {
                            ...mergeData[key],
                            ...jsonData[key],
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            });


        } catch (parseError) {
            console.error(`Error parsing JSON from ${file}:`, parseError);
        }
    });


    fs.writeFileSync(
        "merged-report.json",
        JSON.stringify(mergeData, null, 2),
        "utf8",
    );

    console.log(`Merged ${files.length} files into merged-report.json`);
}

getReportFiles();
