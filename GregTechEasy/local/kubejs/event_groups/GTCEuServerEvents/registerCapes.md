# GTCEuServerEvents.registerCapes

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: RegisterCapesEventJS (third-party)

```
Invoked when the server is first loaded.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| registerCape | ResourceLocation, ResourceLocation |  | void | ✘ |
| unlockCapeFor | UUID, ResourceLocation |  | void | ✘ |
| registerFreeCape | ResourceLocation, ResourceLocation |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `void registerCape(ResourceLocation id, ResourceLocation texture)`

  Parameters:
  - id: ResourceLocation- An identifier for the cape
  - texture: ResourceLocation- The full path to the cape's texture in a resource pack

```
Registers a cape.
```

- `void unlockCapeFor(UUID owner, ResourceLocation capeId)`

  Parameters:
  - owner: UUID- The UUID of the player to give the cape to.
  - capeId: ResourceLocation- The cape to give

```
Automatically makes a cape available to a player.
```

- `void registerFreeCape(ResourceLocation id, ResourceLocation texture)`

  Parameters:
  - id: ResourceLocation- An identifier for the cape
  - texture: ResourceLocation- The full path to the cape's texture in a resource pack

```
Registers a cape that will always be unlocked for all players.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
GTCEuServerEvents.registerCapes((event) => {
	// This space (un)intentionally left blank
});
```

