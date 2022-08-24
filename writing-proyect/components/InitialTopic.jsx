import React from "react";

export default function InitialTopic() {
  return (
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
            <div class="flex items-center border-b border-purple-600 py-2">
              <form>
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your topic here"
                ></input>
              </form>
            </div>
          </div>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Next
        </button>
      </div>
    </div>
  );
}
