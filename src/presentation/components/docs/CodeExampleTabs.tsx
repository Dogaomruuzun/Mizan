import { DOCS_STRUCTURE } from "../../../core/constants/docs-structure";
import { useState } from "react";

export function CodeExampleTabs() {

    const [tab, setTab] = useState("shell");

    const examples = DOCS_STRUCTURE.examples;

    return (
        <div className="bg-white dark:bg-[#0b0d11] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">


            <div className="flex gap-6 px-5 pt-4 border-b border-gray-200 dark:border-gray-800">

                {Object.entries(examples).map(([key, value]) => (

                    <button
                        key={key}
                        onClick={() => setTab(key)}
                        className={`pb-3 text-sm font-medium transition ${
                            tab === key
                                ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        }`}
                    >
                        {value.label}
                    </button>
                ))}
            </div>

            <pre className="p-5 text-[13px] font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
              {examples[tab].code}
            </pre>

        </div>
    );
}
