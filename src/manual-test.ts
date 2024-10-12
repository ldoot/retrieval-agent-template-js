// import { Document } from "langchain/document";
import { generateQuery, respond, retrieve } from "./retrieval_graph/graph.js";
//import { BaseMessage } from "@langchain/core/messages";

// const messages: BaseMessage[] = [
//     {
//         content: "A question",
//         //lc
//     }
// ]
// const state = {
//     retrievedDocs: [
//         new Document({
//             pageContent: "It will be sunny with a high of 25°C.",
//             metadata: { title: "Weather Report" }
//           })
//     ],
//     messages: [
//       { role: "user", content: "What’s the latest news and weather update?" },
//       { role: "system", content: "Fetching the latest information..." }
//     ],
//     queries: []
//   };

await generateQuery({messages: [], retrievedDocs: [], queries: ["Please help me make an order"]});
await retrieve({messages: [], retrievedDocs: [], queries: []}, {})
await respond({messages: [], retrievedDocs: [], queries: []}, {})