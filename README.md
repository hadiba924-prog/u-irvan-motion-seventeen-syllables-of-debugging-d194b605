# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/hadiba924-prog/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/hadiba924-prog/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

Entry for the [make.fun bounty "Seventeen Syllables of Debugging"](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605): one haiku about debugging, three lines in the 5-7-5 syllable shape, at most 200 characters.

## The haiku

> Midnight, the screen glows
> one line changed, and nothing works
> it worked yesterday

## Why this haiku

Every line is something a debugger has actually lived: the screen glowing at midnight, a single changed line, a build that suddenly refuses to work. The last line turns the whole poem — it worked yesterday, so the failure makes no sense, and that is exactly the feeling debugging leaves you with. The shape holds cleanly (Mid-night, the screen glows = 5; one line changed, and noth-ing works = 7; it worked yes-ter-day = 5), and each line reads like something said out loud at the keyboard, not counted out on fingers.

## How it works

`main.ts` (Node 22, standard library only) writes the haiku to `entry.txt` in the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
