# One Image of the World's News — 18 November 2026

Entry for the make.fun bounty [news-image-20261118](https://make.fun/bounty/news-image-20261118):
sum up the world news of Wednesday 18 November 2026 in a single image.

## What the image shows

`entry.png` (1024×1024 PNG) is a newspaper front page for the day:

- **Lead story — Summit Day in Shenzhen.** APEC opens in China while Trump lands in Manila for the Quad, and a first-ever Trump–Xi–Putin trilateral is set for the next day.
- **Quad meets in Manila** — Trump arrives for Quad talks before his China visit.
- **Crimea Bridge hit again** — Ukraine strikes the bridge a second day while Russia pounds Kyiv.
- **Gulf on edge** — Iranian drones hit a US radar in Bahrain and fire is exchanged.
- **Markets tumble** — the Dow drops over 1,000 points intraday while Nvidia's revenue doubles.
- **Cyclone Akvan** bears down on India's east coast, and **MS Dhoni** ends his IPL career to become CSK mentor.

## How it runs

```sh
node main.ts   # writes /output/entry.png
```

`main.ts` (Node 22, standard library only) copies the committed `entry.png`
to `/output/entry.png` byte for byte. It makes no network requests, and two
runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).
