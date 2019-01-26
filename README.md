## Mod React (Redux)

### Generating files and Modifications

To create an action constant and action creator

`$ mod a -a <action>`

To generate a new component file with a component

`$ mod a -c <Component>`

To generate a reducer file with a reducer

`$ mod a -r <reducer>`

To add a reducer to the rootReducer

`$ mod a -t <reducer>`

### Actions

Most of the boilerplate in Redux involves actions or state (and in that order).
More specifically, actions/action creators are added to components and reducers
and not vice versa. Similarly, state is added to reducers and to components.

With that in mind, this command will create the action constant/creator
AND includes the constant into the reducer (it will also create the reducer and
reducer file if it doesn't exist):

`$ mod a -a <action> -r <reducer>`

So too for components (action creator)

`$ mod a -a <action> -c <Component>`

And to do it all at once

`$ mod a -a <action> -c <Component> -r <reducer>`

Two conveniences are that if you use `<action>` as your first argument you can
drop the `-a`:

`$ mod a <action> -c <Component> -r <reducer>`

The second, is that if your component and reducer have the same name, you don't
need to specify each (this was the command given in the preceding section):

`$ mod <action> <Component|reducer>`

One other feature is that the plugin won't write over previous actions, keys,
case statements, etc. Nor does it duplicate them.

### State

Along with actions, you can also add state to your components and reducers.

`$ mod x {myKey,myKey2} -c myComponent`

```
const mapStateToProps = state => ({
  myKey1: state.myComponent.myKey
  myKey2: state.myComponent.myKey
})
```

And if you specify a reducer: `$ mod x {myKey} -c MyComponent -r myReducer`,
it takes priority.
```
const mapStateToProps = state => ({
  myKey: state.myReducer.myKey
})
```

You can also create a custom key: `$ mod x {my.custom.prop} -c MyComponent`
```
const mapStateToProps = state => ({
  prop: state.my.custom.prop
})
```

Finally you can add a key to the reducer as well.
`$ mod x {myKey,myKey2} -r myReducer`.

```
const initialState = {
  myKey1: null,
  myKey2: null,
}
```

Just as with actions, you can add state to both the component and the reducer in
a single command:

`$ mod x {myKey} -c MyComponent -r myReducer`

Currently not supported but coming soon:
If they share the same name
`$ mod -s myKey <Component|reducer>`

Unlike actions, you can't ever omit `x` preceding a state key.