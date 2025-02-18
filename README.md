## Spygar PIM Administration
manage all admin related stuffs.

## Installation

#### Step 1: Add VCS repositories to the `composer.json`

```
{
    "require": {
        "spygar/administration": "dev-master",
    },
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/firojahmad07/administration.git"
        }
    ]
}
```

#### Step 2: Install the bundle in your PIM

```
   composer require spygar/administration:dev-master
```