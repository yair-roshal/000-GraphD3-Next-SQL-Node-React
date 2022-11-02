# GraphD3-Next-SQL-Node-React

## installation


```
npm install
```

if you see "Conflicting peer dependency" :

Fix the upstream dependency conflict, or retry this command with --force, or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.

After that you need to connect the database from the graphs.sql table

## Usage:

```
 run scripts:
 npm run dev ( from main folder ) - Next.js
 npm run dev ( from server folder ) - server (data bases)

```

## Task Requirements:

 
We have a lot of graphs between AI models and we want to create a graph designer
for the models.

In this project we will create a graph designer that implements those requirements:

-   The graph should import and export a json file ,in other words we can provide a json
    and import it to the graph designer and we will render it and also we can export the
    existing design to json.
-   The graph will have multi nodes that connect each other, in other words we don't have a
    limit of connections between nodes. We can have a single node without connection.
-   Nodes have their own props : name, metadata (dictionary) and we connect between
    them by inputs,for example if node a wants information from Node B he will have a
    pointer to Node B so there will be a connection between them in this format:

```# inputs in node A  - need information from node B.
"inputs": {
"B-size": "node-B -> metadata.size"
}
```

### Technical information:

-   Please take a look at the project structure that you develop.
-   The graph should be draggable (Nodes) and responsive.
-   Clear code and speratated components.
-   Use any react library that you like to create graphs (d3 or other).
-   Use any material UI for react.
-   Please write the project with TSX or JSX.
-   Please add tests on functions with logic.

### JSON for example :

```
 {
        "name": "Sample graph",
        "nodes": {
            "node-A": {
                "name": "A",
                "inputs": {
                    "B-size": "node-B -> metadata.size"
                },
                "metadata": {
                    "age": 3
                }
            },
            "node-B": {
                "inputs": {
                    "age-of-node-A": "node-A -> metadata.age"
                },
                "name": "B",
                "metadata": {
                    "age": 10,
                    "size": "90kb"
                }
            }
        }
    }
```
