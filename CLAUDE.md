# Math Practice — project notes

Green Time practice sets for 6th grade math. Plain HTML, no build step.
Netlify publishes the `main` branch automatically, usually within a minute of a push.

## How to work in this repo

- **Always commit straight to `main` and push.** Never create a branch. Never open a
  pull request. A change that isn't on `main` never reaches the students.
- After pushing, say so plainly so I know to check the live site.
- No build command, no framework, no package installs. These are static files.

## How the hub works

`index.html` is the Green Time hub for Mr. Landy. `index-b.html` is the same
hub for Ms. Sandra, running two school days behind. Neither file lists the
lessons. Both are empty shells that load `plan.js`, which draws every row.

The class list lives in the `UNIT0` object at the top of `plan.js`:

    { n:5, type:"lesson", code:"0.07", title:"So What IS 5/8?", opens:"2026-08-19" },

**Lessons unlock automatically on their `opens` date.** Before that date the row
renders greyed out with a padlock and an "Opens Aug 19" tag. On or after it, the
row becomes a link to `0-07.html` — the filename comes from the code, with the
dot replaced by a hyphen. Nobody unlocks anything by hand.

**To move when a lesson opens:** change its `opens` date in `plan.js`. That is
the only lever.

**To add a lesson:** add an object to the `classes` array with its code, title
and `opens` date, and create the matching HTML file. Rows of `type:"quiz"`,
`"practice"` or `"summative"` render as paper — no file needed, nothing to click.

### Rules about the hub

- **Never move an `opens` date earlier than today** unless I say so explicitly,
  by lesson number. That would unlock a set students should not see yet.
- **Never move a date later once it has passed** — students may be partway
  through that set.
- If I say "unlock today's lesson" without a number, ask me which one. Do not
  guess from the date.
- Ms. Sandra's two-day lag is the single `offset` number in `index-b.html`.
  Do not change it unless I ask.

## Do not touch

- `SUBMIT_URL` in any practice file — that is the live Apps Script endpoint. If it
  changes, student work stops reaching the spreadsheet.
- The `ENGINE` section of any practice file (everything below the line that says
  "ENGINE — nothing below here needs editing").
- File names. The hub links to them by name.
- Question text, answers, or `accept` lists unless I ask for a specific change.
- `roster.js` — the VIP numbers and section assignments. Only I change these.
- `plan.js` dates, unless I ask for a specific lesson to move.
- The `v2` suffix on `keyFor` in `0-00.html`. It is deliberate — it separates
  the rewritten VIP questions from students' saved answers to the old ones.
  No other file should have it.

## If I ask for a new practice set

Copy the most recent existing set — that one has the current engine — and change
only the `LESSON` block at the top. Save it under the filename matching its
code: `0.09` becomes `0-09.html`.

Do not edit `index.html` or `index-b.html`. If the lesson already has a row in
`plan.js` it will appear on its own. If it does not, add one.

## Things that are fine, don't investigate

- GitHub's grey "Unverified" badge on commits is expected in this repo. Commit
  signing is not set up and doesn't need to be. Never try to fix it, and don't
  mention it.
