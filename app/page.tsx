"use client"

import { SampleActions } from "@/actions/sample-action";
import { useState } from "react";

export default function Home() {
  const [actionResult, setActionResult] = useState<any>(null);
  const [apiResult, setApiResult] = useState<any>(null)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center w-[500px] justify-between">
        <button
          onClick={async () => {
            const res = await SampleActions("Hello World");
            setActionResult(res);
          }}
          className="bg-white text-black border border-black px-4 py-2 rounded-lg">
          Next Action Trigger
        </button>
        <button
          onClick={async () => {
            const res = await fetch("/api/test");
            const data = await res.json();
            setApiResult(data);
          }}
          className="bg-white text-black border border-black px-4 py-2 rounded-lg">
          API Req Trigger
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">Action Result</h1>
          <pre>{JSON.stringify(actionResult, null, 2)}</pre>
        </div>
        <div>
          <h1 className="text-2xl font-bold">API Result</h1>
          <pre>{JSON.stringify(apiResult, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
