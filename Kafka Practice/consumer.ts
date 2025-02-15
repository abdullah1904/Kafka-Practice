import { kafka } from "./client";

const group = process.argv[2];

const init = async ()=>{
    const consumer = kafka.consumer({
        groupId: group
    });
    await consumer.connect();
    console.log("Consumer connected");
    await consumer.subscribe({
        topic: "rider-updates",
        fromBeginning: true
    });
    console.log("Consumer subscribed");
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`${group} ${topic} ${partition} ${message.value ? message.value.toString() : 'null'}`);
        },
    });
}

init();