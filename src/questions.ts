import { Question } from "./question";

export const questions: Question[] = [{
    id: "3",
    title: "GRASP patterns",
    group: "GRASP patterns",
    description: `The Domain Model illustrates conceptual classes of the real - world domain; the Design Model illustrates software classes. \n
      Composite aggregates Part, Container contains Content, and Recorder records. \n
      The GRASP principles will let you understand the rationale behind the GoF design patterns. \n
      There are nine GRASP patterns:`,
    list: [
      {
        title: "Information expert",
        description:
          "if you have an operation to do, and this operations needs inputs, then you should consider putting the responsibility of carrying out this operation in the class that contains the inputs for it.",
      },
      {
        title: "Creator",
        description: `gives guidelines as to which class B should be in charge of creating a certain type of objects A. 
        B contains or aggregates instances of A
        B closely uses A
        B has the inputs to construct A
        This goes a further than Information expert: it’s not just about having the input of the operation of construction, it’s about being “close” to the operation.`,
      },
      {
        title: "Low coupling",
        description:
          "Coupling is a measure of how strongly one element is connected to, has knowledge of, or relies on other elements. Coupling happens between two parts of the code when one depends on the other",
      },
      {
        title: "High cohesion",
        description: `The principle of High cohesion encourages to focus classes around one responsibility, and to have all its components oriented towards achieving this responsibility. 
      This is the principle of “do one thing and do it well”. 
      The principle of high cohesion also applies to other elements of the code, such as functions, and also modules and systems. 
      This ties back well with the idea of having a well-organized code: a highly cohesive component lets you label it in your mind with “this is the part of the code that does X”. 
      This allows better mental abstractions as well as code abstractions. 
      is a measure of how strongly related and focused the responsibilities of an element are`,
      },
      {
        title: "Polymorphism",
        description: `is often seen as having a base class with virtual methods that defines an interface, and derived classes implementing this interface, but this is only one type of polymorphism. 
      There are plenty of types of polymorphism (including templates for example). 
      The usage for polymorsphism is when there are several ways to accomplish a task, and you want to decouple the clients of this task from the various pieces of code that implement the various ways to perform it. 
      The Polymorphism principle is very close to the GoF Strategy pattern, if not identical. 
      It contributes to the Low Coupling principle.`,
      },
      {
        title: "Pure fabrication",
        description: `It is natural to represent in our code objects that map the reality of the domain that we’re trying to model. 
      For example, if you’re working on a financial application, you can probably expect to encounter some classes called Transaction or Portfolio in the code. 
      But sometimes you have a responsibility to assign, and it seems to not fit well in any domain class. 
      And according to the principle of High cohesion above, you shouldn’t force a responsibility into a class that is already doing something else. 
      That’s when the principle of Pure fabrication comes into play: create a class that does not map to a domain object, and let it achieve this new responsibility in a cohesive way.`,
      },
      {
        title: "Controller",
        description: `Here is an example of a pure fabrication: a UI Controller. 
        Personal opinion: I would have kept this as an example of pure fabrication and not made a principle out of it.
         The controller is the first non-UI component that receives the UI event and organizes the operations to react to this event. 
         Indeed, that doesn’t map to any domain object, even if the UI itself can display domain concepts. 
         There are also other examples of pure fabrications in the GoF design patterns: for example, a Facade object is a pure fabrication.`,
      },
      {
        title: "Indirection",
        description: `is another way to reduce coupling by creating an intermediary class (or any kind of component) between two classes A and B. 
        This way, the changes in each one of A and B don’t affect the other one. 
        The intermediary class absorbs the impact by adapting its code rather than A or B (or more other classes). 
        This relates a lot to the Adapter design pattern, even though the Adapter design pattern is rather made to connect two existing incompatible interfaces. 
        But it also has the effect of protecting each one against the changes of the other. 
        Indirection looks a bit like Protected variations, as they both introduce a layer between components in order to reduce coupling. 
        According to my understanding, the difference between Protected variations and Indirection is that Protected variations is about designing interfaces in the existing components, whereas Indirection is about introducing a new component in the middle.`,
      },
      {
        title: "Protected variations",
        description: `is related to the one of Low coupling, because it helps reducing the impacts of the changes of the code of one part A on another part B. 
        The code of part B is protected against the variations of the code of part A, hence the name of the pattern. 
       How do you achieve such a protection? By organizing the responsibilities around stable interfaces. 
       This is particularly relevant for code that tends to change often. `,
      },
    ],
    links: [
      "https://www.wisdomjobs.com/e-university/uml-tutorial-175/applying-grasp-to-object-design-13379.html",
    ],
  },
  {
    id: "4.1",
    title: "Tools to control/ improve code quality",
    group: "Code quality",
    description: "",
    list: [
      {
        title: "ESLint",
        description: `a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. 
      Linting is all about analysing the code without having to execute it`,
      },
      {
        title: "Prettier",
        description: `An opinionated code formatter`,
      },
      {
        title: "GIT (Code Review)",
        description: `Open Source distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people`,
      },
      {
        title: "Unit, integration, and functional testing",
        description: `Unit: jest, mocha, sinon, chai, jasmine. Integrational: Selenium WebDriver, cypress, supertest`,
      },
      {
        title: "Refactoring",
        description: `IDE's built-in tools for automated refactoring based on sourse code's semantic tree`,
      },
      {
        title: "unimported (npm package)",
        description: `analyzes your code by following the require/import statements starting from your entry file, showing which files are unimported, which dependencies are missing from your package.json, and which dependencies can be removed from your package.json`,
      },
      {
        title: "webpack-bundle-analyzer",
        description: `will help you realize what's really inside your bundle, find out what modules make up the most of its size and find modules that got there by mistake`,
      },
      {
        title: "dependency-cruiser (npm package)",
        description: `runs through the modules of your project (detecting circular dependencies, dependencies missing in package.json, orphans, production code relying on dev- or optionalDependencies etc.), can generates dependency graphs`,
      },
    ],
  },
  {
    id: "4.2",
    title: "Cyclomatic complexity",
    group: "Code quality",
    description: `Cyclomatic complexity (CYC) is a software metric used to determine the complexity of a program. 
    It is a count of the number of decisions in the source code. 
    The higher the count, the more complex the code.
    Why it's important: 1) Limit code complexity; 2) Determine the number of test cases required.
    How to calculate CYC: CYC = E – N + 2P

  (E = Number of edges (transfers of control); 
  N = Number of nodes (sequential group of statements containing only one transfer of control);
  This translates to the number of decisions + 1;
  P = Number of disconnected parts of the flow graph (e.g. a calling program and a subroutine)).
  
  Binary decisions (if/while) add 1 to complexity.
  Boolean operators can add either one or nothing to complexity. For instance, one may be added if a Boolean operator is found within a conditional statement.
    
  void foo(void)
  {
      if (a)
          if (b) 
              x=1;
      else
          x=2;
   }
  So, CYC = 3 in this example. 
  `,
  },
  {
    id: "5.1",
    title: "TDD / BDD",
    group: "Testing / Unit testing",
    description: ``,
    list: [
      {
        title: "Test-Driven Development (TDD)",
        description: `a testing methodology or a programming practice implemented from a developer’s perspective. 
  This technique starts by designing and writing test cases for every small functionality of an application. 
  The main intention of this technique is to modify or write a fresh code only when the test fails. 
  In a TDD approach, automated test scripts are written before functional pieces of code. Involves the following steps:
  1) Write a Failing Test - 2) Execute All Existing Tests - 3) Write Production Code to Make the Test Pass - 4) Refactor If Necessary.
  Benefits of Test-Driven Development: Simpler design; Fewer defects; Detailed project specification; High test coverage; High code coverage; Fewer regression problems.`,
      },
      {
        title: "Behavioral-Driven Development (BDD) ",
        description: `is a testing approach derived from the TDD methodology. 
        Tests are mainly based on systems behavior, in most cases, the Given-When-Then approach is used for writing test cases.
        1) Write the Behavior - 2) Convert the Plain English Behaviors Into Scripts - 3) Implement the Behavior by Writing Production Code - 4) Refactor If Needed.
        Key benefits of Behavioral-Driven Development approach: Collaboration; Fewer defects; Fewer regression problems; Comprehensive project documentation fit for multiple target audiences;
        Traceability for every piece of functionality.`,
      },
      {
        title: `Acceptance Test-Driven Development (ATDD)`,
        description: `a single acceptance test is written from the user’s perspective.
        It mainly focuses on satisfying the functional behavior of the system. 
        This technique attempts to answer the question – Is the code working as expected?

        A key difference: BDD focuses more on the behavior of the feature, whereas ATDD focuses on capturing the accurate requirements.
        The following are some of the key practices in ATDD:
        - Analyzing and discussing the real-world scenarios
        - Deciding the acceptance criteria for those test scenarios
        - Automating the acceptance test cases
        - Focusing on the development of those requirement cases.

        Benefits of ATDD: 1) Requirements are very clearly analyzed without any ambiguity; 
        2) Encourages collaboration among cross-team members;
        3) The acceptance test serves as a guide for the entire development process`,
      },
    ],
  },
  {
    id: "5.2",
    title: "Different types of tests",
    group: "Testing / Unit testing",
    description:
      "Accessibility, Acceptance, Black box, End to end, Functional, Interactive, Integration, Load, Non functional, Performance, Regression, Sanity, Security, Single user performance, Smoke, Stress, Unit, White-box",
    list: [
      {
        title: "Unit tests",
        description: `are very low level. They consist in testing individual methods and functions of the classes, components or modules used by your software. Unit tests are in general quite cheap to automate and can be run very quickly.`,
      },
      {
        title: "Integration tests",
        description: `verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. 
        These types of tests are more expensive to run as they require multiple parts of the application to be up and running.`,
      },
      {
        title: "Functional tests",
        description: `focus on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action.
      An integration test may simply verify that you can query the database while a functional test would expect to get a specific value from the database as defined by the product requirements.`,
      },
      {
        title: "End-to-end tests",
        description: `replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc...
      End-to-end tests are very useful, but they're expensive to perform and can be hard to maintain when they're automated.`,
      },
      {
        title: "Acceptance tests",
        description: `are formal tests executed to verify if a system satisfies its business requirements.
        They require the entire application to be up and running and focus on replicating user behaviors. But they can also go further and measure the performance of the system and reject changes if certain goals are not met.`,
      },
      {
        title: "Performance tests",
        description: `check the behaviors of the system when it is under significant load. These tests are non-functional and can have the various form to understand the reliability, stability, and availability of the platform.
      Performance tests are by their nature quite costly to implement and run, but they can help you understand if new changes are going to degrade your system.`,
      },
      {
        title: "Smoke tests",
        description: `Smoke tests are basic tests that check basic functionality of the application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.
      Smoke tests can be useful right after a new build is made to decide whether or not you can run more expensive tests, or right after a deployment to make sure that they application is running properly in the newly deployed environment.`,
      },
      {
        title: "Black Box Testing",
        description: `involves testing against a system where the code and paths are invisible.`,
      },
      {
        title: "White Box Testing",
        description: `involves testing the product's underlying structure, architecture, and code to validate input-output flow and enhance design, usability, and security.`,
      },
    ],
  },
  {
    id: "5.3",
    title: "Test doubles: mock, stub, spy, fake, dummy",
    group: "Testing / Unit testing",
    description: "",
    list: [
      {
        title: "Dummy",
        description:
          "objects are passed around but never actually used. Usually they are just used to fill parameter lists.",
      },
      {
        title: "Fake",
        description:
          "objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example)",
      },
      {
        title: "Stubs",
        description:
          "provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.",
      },
      {
        title: "Spies",
        description:
          "are stubs that also record some information based on how they were called.",
      },
      {
        title: "Mocks",
        description:
          "objects pre-programmed with expectations which form a specification of the calls they are expected to receive.",
      },
      {
        title: "Test Double",
        description:
          "any kind of pretend object used in place of a real object for testing purposes",
      },
    ],
  },
  {
    id: "6.1",
    title: "Recap of SOC principle, practical use if possible",
    group: "Object oriented design",
    description:
      ``,
  },
  {
    id: "6.2",
    title: "GoF patterns / Antipatterns",
    group: "Object oriented design",
    description:
      ``,
      links: ['http://refactoring.guru']
  },
  {
    id: "6.3",
    title: "Abstraction Qualities (cohesion high / low, coupling)",
    group: "Object oriented design",
    description:
      ``,
  },

  {
    id: "7.1",
    title: "Learn about UML syntax, notations, and use-cases",
    group: "UML Modeling",
    description:
      ``,
  },
  {
    id: "7.2",
    title: "Know about Structure, Behaviour, State, Interaction and Sequence diagram, as well as more simple once (class, flow and use-cases diagrams)",
    group: "UML Modeling",
    description:
      ``,
  },

  {
    id: "8.1",
    title: "Parallelism in Node.JS: Learn how nodejs works in parallel on OS level (thread env)",
    group: "NodeJS",
    description:
      ``,
  },
  {
    id: "8.2",
    title: "Parallelism in Node.JS: child_process, cluster, and workers libs, difference, know when to use what",
    group: "NodeJS",
    description:
      ``,
  },
  {
    id: "8.5",
    title: "Get familiar with V8 and VM modules",
    group: "NodeJS",
    description:
      ``,
  },
  {
    id: "8.6",
    title: "Graceful shutdown techniques",
    group: "NodeJS",
    description:
      ``,
  },
  {
    id: "8.7",
    title: "Extend knowledge about core modules in NodeJS",
    group: "NodeJS",
    description:
      ``,
  },
  {
    id: "8.8",
    title: "Learn how ORM and ODM are working",
    group: "NodeJS",
    description:
      ``,
  },

  {
    id: "9.1",
    title: "Learn about memory management along with the structures that are used to provide memory env (stack, heap, queue)",
    group: "Core JavaScript",
    description:
      ``,
  },
  {
    id: "9.2",
    title: "Know about how GC is working (where/when it's running, the possibility of running it manually, why it could be useful)",
    group: "Core JavaScript",
    description:
      ``,
  },
  {
    id: "9.3",
    title: "Recap about prototypal inheritance",
    group: "Core JavaScript",
    description:
      ``,
  },
  {
    id: "9.4",
    title: "WeakSet and WeakMap recap",
    group: "Core JavaScript",
    description:
      ``,
  },
];
