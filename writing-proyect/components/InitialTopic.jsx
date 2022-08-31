import React from "react";
import { useState } from "react";


export default function InitialTopic() {
  const [initialTopic, setInitialTopic] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initialTopic: initialTopic }),
    });
    const data = await response.json();
    console.log(data);
    setResult(data.result);
    setInitialTopic("");
  }

  return (
    <>
    <div>
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        //  src="./public/brilliantIdea.png"
        src="https://us.123rf.com/450wm/vektoria/vektoria1807/vektoria180700001/108438204-light-bulb-great-idea-bulb-icon-clipart-vector-illustration-.jpg?ver=6"
        alt="Brillian Idea"
      ></img>
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <div>
            <div class="text-xl font-medium text-black">
              Which topic would you like to write about?
            </div>
            <div class="flex items-center ">
              <form  onSubmit={onSubmit}>
                <input
                  class="appearance-none bg-transparent border-b  py-2 border-purple-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your topic here"
                  name="initialTopic"
                  value={initialTopic}
                  onChange={(e) => setInitialTopic(e.target.value)}
                ></input>
          
                  <button type="submit" value="Generate topics" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Next
        </button>
              </form>
            </div>
          </div>
        </div>
      </div>

     
    </div>
     <div >
      <p> Here are some suggestions you can use in your title:</p>{result}</div>
     </>
  );
}
