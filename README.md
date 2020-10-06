
## One computer, one driver, one navigator. Make a commit after each step.

### Setup

1. Init Directory
1. Start express
1. Create Home page

### First Model

1. Create Index
1. Create New Page
1. Set Up Model
1. Create Post Route
1. Show All Models on Index Page
1. Create Show Page
1. Create Delete Route
1. Create Edit Page
1. Create Put Route

## Git stuff: Sync up

1. Driver: add the other person(s) as collaborator
1. Navigator: clone.

## Switch driver/navigator

1. Old Navigator/New driver: create a branch and switch to it
```
git checkout -b second-model
```

### Second Model

1. Create Index
1. Create New Page
1. Set Up Model
1. Create Post Route
1. Show All Models on Index Page
1. Create Show Page
1. Create Delete Route
1. Create Edit Page
1. Create Put Route

## Sync up

1\.  Driver: Once all of second section is done, switch back to the master branch

```
git checkout master
```

2\. Driver: Merge the branch with second model into the master branch, and follow prompts to resolve any merge conflicts.  Ask for help with this step if you're stuck.  

```
git merge second-model
```

3\. Once you've finished the merge, do another commit, if necessary, with the message: `resolved merge conflicts`

4\. Navigator: Sync up by running: 

```
git pull origin master
```

There should not be any merge conflicts
