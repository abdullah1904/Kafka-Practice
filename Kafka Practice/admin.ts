import { kafka } from "./client";

const init = async ()=>{
    const admin = kafka.admin();
    await admin.connect();
    console.log("Admin connected");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            },
        ]
    });
    console.log("Topic's created");
    await admin.disconnect();
    console.log("Admin disconnected");
}

init();