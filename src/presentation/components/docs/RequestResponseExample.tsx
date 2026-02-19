import { DOCS_STRUCTURE } from "../../../core/constants/docs-structure";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function RequestResponseExample() {

    const [copied, setCopied] = useState("");

    const copy = (text: any, key: string) => {
        navigator.clipboard.writeText(JSON.stringify(text, null, 2));
        setCopied(key);
        setTimeout(() => setCopied(""), 1500);
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


            <div className="bg-white dark:bg-[#0b0d11] border border-gray-200 dark:border-gray-800 rounded-xl">

                <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Request
                    </span>

                    <button
                        onClick={() => copy(DOCS_STRUCTURE.endpoint.request.body, "req")}
                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
                    >
                        {copied === "req"
                            ? <Check size={16} className="text-green-500"/>
                            : <Copy size={16} className="text-gray-400"/>}
                    </button>
                </div>

                <pre className="p-5 text-[13px] font-mono text-blue-500 dark:text-blue-400 overflow-x-auto">
{JSON.stringify(DOCS_STRUCTURE.endpoint.request.body, null, 2)}
                </pre>

            </div>



            <div className="bg-white dark:bg-[#0b0d11] border border-gray-200 dark:border-gray-800 rounded-xl">

                <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Response
                    </span>

                    <button
                        onClick={() => copy(DOCS_STRUCTURE.endpoint.response, "res")}
                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
                    >
                        {copied === "res"
                            ? <Check size={16} className="text-green-500"/>
                            : <Copy size={16} className="text-gray-400"/>}
                    </button>
                </div>

                <pre className="p-5 text-[13px] font-mono text-green-600 dark:text-green-400 overflow-x-auto">
{JSON.stringify(DOCS_STRUCTURE.endpoint.response, null, 2)}
                </pre>

            </div>

        </div>
    );
}
