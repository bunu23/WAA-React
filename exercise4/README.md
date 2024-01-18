React Hooks: Built-in functions that allows developer to use state and lifecycle methods inside functional components.

- makes working with state and lifecycle methods easier inside functional components.

Two important hooks implemented in this exercise:

1. useState : deals with state
2. useEffect : deals with events

Note:
In this exercise we have counter component and their the numberofclick is local to that counter component.
What if we want to share? Only way to do is put state in a top component so a child component cannot give state to top component without having a state. Child component can change the state of top component. But cannot have its own state and give it to parent component. If two components have the same level and need to share state we have to put state in parent component with hook state method. state should always be the parent of both components that they share.
