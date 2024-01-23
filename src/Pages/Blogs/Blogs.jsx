const Blogs = () => {
  return (
    <div className=" mx-20">
      <h2 className=" text-2xl font-semibold">
        {" "}
        1/Diffenet between contorl component & Uncontrolled Components
      </h2>
      <p>
        Controlled Components: Data is managed by React state. Input values are
        set by React state, and changes are handled by event handlers updating
        the state. Provides more predictability and consistency. Commonly used
        for more complex forms where tight control is necessary.
        <br />
        <span className="text-red-500">Uncontrolled</span>
        <br />
        Components: Data is managed by the DOM, not React state. Input values
        are handled by the DOM, and refs are used to access their values.
        Simpler implementation, closer to traditional HTML forms. Useful for
        simpler forms where less React overhead is desired.
      </p>
      <h2 className=" text-2xl font-semibold">
        {" "}
        2/validate React props using PropTypes{" "}
      </h2>
      <p>
        .Import PropTypes: First, you need to import the PropTypes object from
        the prop-types package, which is a separate <br />
        .Define PropTypes for a Component: Attach a propTypes object to your
        component, where each property of this object corresponds to a prop the
        component expects, and the value describes the type. <br />
        Marking Props as Required: If a prop is mandatory, you can add
        isRequired to its type definition. If a required prop is not provided,
        React will log a warning in the console during development.{" "}
      </p>
      <h2 className=" text-2xl font-semibold">
        {" "}
        3/Diffenet bewteen nodejs & express js{" "}
      </h2>
      <p>
        Node.js is a JavaScript runtime environment that allows you to run
        JavaScript on the server side. It's built on Chrome's V8 JavaScript
        engine and enables building scalable network applications. Express.js,
        on the other hand, is a framework that runs within Node.js. It
        simplifies the process of writing server-side applications by providing
        a suite of tools and features for creating web applications and APIs.
        Express.js is known for its minimalism and flexibility, allowing
        developers to write less code and easily integrate with other libraries
        and middleware.
      </p>
      <h2 className=" text-2xl font-semibold">4/What is a custom hook, and why will you create a custom hook?</h2>
      <p>
        Reusability: To reuse stateful logic across different components without
        repeating code. Simplicity: To simplify complex components by
        abstracting common behavior into a single hook. Organization: To keep
        your code organized and easier to understand by encapsulating and
        separating logic. Custom hooks provide a powerful way to share logic in
        a clear, concise, and DRY (Don't Repeat Yourself) manner.
      </p>
    </div>
  );
};

export default Blogs;
