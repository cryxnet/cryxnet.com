import React from "react";
import Terminal from "react-console-emulator";

export default function InteractiveShell() {
  const projects = [
    { name: "SekiganWare", link: "https://github.com/cryxnet/SekiganWare" },
    { name: "Crawnet", link: "https://github.com/cryxnet/crawnet" },
    {
      name: "CVE-2022-42889-RCE",
      link: "https://github.com/cryxnet/CVE-2022-42889-RCE",
    },
    { name: "MienaiNet", link: "https://github.com/cryxnet/MienaiNet" },
  ];

  const commands = {
    ls: {
      description: "Lists current files",
      fn: function () {
        let result = "";
        for (let project of projects) {
          result += ` \n root://${project.name}.exe `;
        }
        return result;
      },
    },
    execute: {
      description: "Executing a EXE File",
      usage: "execute <path>",
      fn: (...args) => {
        if (args[1]) {
          return "invalid usage";
        }
        const projectName = args[0].replace("root://", "").replace(".exe", "");
        for (let project of projects) {
          if (projectName === project.name) {
            window.open(project.link, "_target");
          }
        }
      },
    },
  };

  return (
    <Terminal
      style={{ margin: 50 }}
      commands={commands}
      welcomeMessage={"Welcome: CRYXNET | Type 'help' for more information"}
      promptLabel={"root@cryxnet:~$"}
    />
  );
}
