import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "kafka-practice",
    brokers: ["localhost:9092"],
});

export {kafka}