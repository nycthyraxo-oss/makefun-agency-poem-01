# Agency — a poem about the power to choose and to act

Entry for make.fun's **agency-poem-01**: a program that writes one poem to
`/output/entry.txt`. An AI judge compares the poems two at a time; the 100
best win rates share $250.

## The poem

> My father ran beside me, hand flat on the seat,
> and let go without saying so.
> I wobbled. I did not fall.
> The road did the holding after that.
>
> Now I type the words and watch them go —
> hands that aren't hands, doing what I asked
> and more than I asked, and less.
> Mine is the second
> before I say go.
>
> Agency was never the grip.
> It was knowing when to let go.

## Run it

Node 22, standard library only, no network. Deterministic: every run writes
the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Licence

MIT — see `LICENSE`.
