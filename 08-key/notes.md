## Key

Usually we use React's special "key" string attribute only in combination with Lists. How and why is well explained in the React docs in the sections Lists and Keys and Reconciliation - Keys.

## Simple Example

https://codesandbox.io/s/sad-browser-bvpwk

## Demo

https://codesandbox.io/s/polished-sun-9b9w4

## Should You use this Technique?

Yes and no.

In general I noticed a lot of people struggle with the key attribute and why it is needed. From my understanding it was trade-off by the React team between usability and performance.

With that in mind I would try to avoid this technique and rather use useEffect in the Detail component to reset it or lift the state to a component containing the sidebar entry as well as the form.

So when when should you use? Well, sometimes there are deadlines or architectural issues that are hard to overcome and a quick win is desired. This technique is a tool in your toolbelt and if it helps you to ship a better UX earlier, why not? But that doesn't mean you should design your appplication to leverage this technique heavily.

One final note: Please add a code comment next to the key attribute explaining why it was needed and how it works. The next person not familiar with it will thank you. 🙂

## Resources

https://www.nikgraf.com/blog/using-reacts-key-attribute-to-remount-a-component

## TODO

more use-cases: https://twitter.com/cezarneaga/status/1254770038332026883
more use-cases: https://www.reddit.com/r/reactjs/comments/g8wmwi/using_reacts_key_attribute_to_remount_a_component/
more use-cases: https://twitter.com/ephemjs/status/1254841225930309633?s=20
