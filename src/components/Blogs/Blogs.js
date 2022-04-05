import React from "react";

const Blogs = () => {
  return (
    <div className="bg-slate-200">
      <h1 className="text-3xl font-bold">Question - 1: What is Context API?</h1>
      <h2 className="text-2xl font-semibold">Answer:</h2>
      <p className="text-xl font-semibold">
        Context APIs are used to set the global data and this data can now be
        accessed in any of the children's components without the need to pass it
        through every parent component.React.createContext() is all you need. It
        returns a consumer and a provider. Provider is a component that as it's
        names suggests provides the state to its children. Consumer as it so
        happens is a component that consumes and uses the state.
      </p>
      <h1 className="text-3xl font-bold mt-8">
        Question - 2: What is Symantic Tag?
      </h1>
      <h2 className="text-2xl font-semibold">Answer:</h2>
      <p className="text-xl font-semibold">
        A semantic tag in HTML is a tag whose name clearly describes its purpose
        and content.For sighted users, when a page is well designed visually, it
        is easy to identify the various parts of a web page at a glance.
        Headers, menus, and (hopefully) the main content are all immediately
        visually apparent.For users who are blind or visually impaired and rely
        on screen readers to verbally describe what is on a page, proper use of
        HTML5 semantic elements will allow screen readers to more accurately
        communicate your content by making the visual audible. It is vital to
        embrace this newer version of HTML so you can make your content
        accessible to all possible site visitors.
      </p>
    </div>
  );
};

export default Blogs;
