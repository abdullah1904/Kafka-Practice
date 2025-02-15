import { kafka } from "./client"
import {createInterface} from "readline"


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const init = async () => {
    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");
    rl.setPrompt("Enter: ");
    rl.prompt();
    rl.on("line", async (line) => {
        const [riderName, location ] = line.split(" ");
        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                    partition: location.toLowerCase() === 'north' ? 0 : 1,
                    key: "location-update", value: JSON.stringify({
                        name: riderName,
                        location: location,
                    })
                },
            ],
        });
        console.log("Message sent");
    }).on("close", async () => {
        await producer.disconnect();
        console.log("Producer disconnected");
    });
}
init();