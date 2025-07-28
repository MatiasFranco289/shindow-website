"use client";
import CodeBlock from "@/components/CodeBlock";
import { useEffect, useState } from "react";
import { getDocument } from "../../../utils";

export default function Installation() {
  const [startFrontCode, setStartFrontCode] = useState<string>("");
  const [startBackCode, setStartBackCode] = useState<string>("");
  const [dockerComposeCode, setDockerComposeCode] = useState<string>("");
  const [frontEnvironmentVars, setFrontEnvironmentVars] = useState<string>("");
  const [backEnvironmentVars, setBackEnvironmentVars] = useState<string>("");

  useEffect(() => {
    async function getDocuments() {
      const documents = await Promise.all([
        getDocument("/documents/startFrontContainer.txt"),
        getDocument("/documents/startBackContainer.txt"),
        getDocument("/documents/dockerCompose.txt"),
        getDocument("/documents/frontEnvironmentVars.txt"),
        getDocument("/documents/backEnvironmentVars.txt"),
      ]);

      setStartFrontCode(documents[0]);
      setStartBackCode(documents[1]);
      setDockerComposeCode(documents[2]);
      setFrontEnvironmentVars(documents[3]);
      setBackEnvironmentVars(documents[4]);
    }

    getDocuments();
  }, []);

  return (
    <div
      className="w-full bg-gradient-to-t from-custom-green-50 to-custom-green-150 font-roboto 
    overflow-hidden min-h-screen flex flex-col items-center pb-12 pt-6"
    >
      <div className="w-5/6 lg:w-3/6">
        {/* Setup via docker */}
        <div className="space-y-4" id="docker">
          <h2 className="text-3xl font-semibold mb-6">
            Shindow Installation with Docker
          </h2>

          <p>
            The simplest way to install Shindow is via Docker. Ensure Docker is
            installed on your system:{" "}
            <a
              className="text-purple-500 underline"
              href="https://docs.docker.com/get-started/get-docker/"
              target="_blank"
            >
              Get Docker
            </a>
          </p>

          <p>
            After installing Docker, start Shindow by running the following
            commands. Replace <b>SERVER_IP</b> in the second command with the
            actual server IP address.
          </p>

          <p>1 - Start the frontend container:</p>

          <CodeBlock code={startFrontCode} />

          <p>2 - Start the backend container:</p>

          <CodeBlock code={startBackCode} />

          <p>
            Shindow will be available at:{" "}
            <a
              href="http://localhost:52087"
              className="text-purple-500 underline"
              target="_blank"
            >
              localhost:52087
            </a>
          </p>
        </div>

        <div className="space-y-4" id="docker-compose">
          <h2 className="text-3xl font-semibold my-6">
            Shindow Installation with Docker Compose
          </h2>

          <p>
            For better configuration management, you can use Docker Compose.
            Create a <span className="text-blue-400">docker-compose.yml</span>{" "}
            file with the following content:
          </p>

          <CodeBlock code={dockerComposeCode} />

          <p>2 - Start the services:</p>

          <CodeBlock code={"docker compose up -d"} />

          <p>
            Shindow will be available at:{" "}
            <a
              href="http://localhost:52087"
              className="text-purple-500 underline"
              target="_blank"
            >
              localhost:52087
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold my-6">
            Shindow Development Setup
          </h2>

          <p>
            If you are a developer and want to run Shindow in development mode
            to make changes, you can find a detailed guide in the{" "}
            <span className="text-blue-400">README.md</span> of the{" "}
            <a
              href="https://github.com/MatiasFranco289/Shindow"
              target="_blank"
              className="text-purple-500 underline"
            >
              official repository
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold my-6">Environment Variables</h2>

          <p>
            You can customize Shindow by adjusting the following environment
            variables:
          </p>

          <h3 className="text-lg font-semibold">Frontend</h3>

          <CodeBlock code={frontEnvironmentVars} />

          <h3 className="text-lg font-semibold">Backend</h3>

          <CodeBlock code={backEnvironmentVars} />
        </div>
      </div>
    </div>
  );
}
