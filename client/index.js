import { DaprClient, DaprServer, HttpMethod } from "@dapr/dapr"

const daprHost = process.env.DAPR_HOST || "http://localhost";
const daprPort = "3500";
const serviceAppId = "meo";

const client = new DaprClient({daprHost, daprPort});

async function main() {
    await client.invoker.invoke(serviceAppId, "", HttpMethod.GET);
}

main().catch(e => console.error(e))