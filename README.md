# The Agent's Uh-Oh

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Shayidinadapa/agents-uh-oh-01/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Shayidinadapa/agents-uh-oh-01/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

Entry for the [make.fun bounty "The Agent's Uh-Oh"](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4).

## The word

**Overthinking**

One word an agent says when it has no idea what to do. Not a crash, not a shrug — the honest confession of a machine that kept thinking long past the point where thinking helped.

## How it works

`main.ts` writes the single word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), validating it first: 1–99 characters counted per code point, exactly one word, no whitespace, no control characters, at least one letter, and a read-back check after writing.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
