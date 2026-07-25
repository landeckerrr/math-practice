# Math Practice — project notes

Green Time practice sets for 6th grade math. Plain HTML, no build step.
Netlify publishes the `main` branch automatically, usually within a minute of a push.

## How to work in this repo

- **Always commit straight to `main` and push.** Never create a branch. Never open a
  pull request. A change that isn't on `main` never reaches the students.
- After pushing, say so plainly so I know to check the live site.
- No build command, no framework, no package installs. These are static files.

## Locking and unlocking lessons

`index.html` is the Green Time hub. Every practice set is one line, in one of two states:

```html
<!-- UNLOCKED: students can open it -->
<a class="set" href="0-04.html"><span class="code">0.04</span><span class="title">Decimal Reminders</span><span class="arrow">→</span></a>

<!-- LOCKED: greyed out with a padlock, not clickable -->
<a class="set locked"><span class="code">0.04</span><span class="title">Decimal Reminders</span><span class="arrow"></span></a>
```

**To unlock a lesson:** remove ` locked` from the class, add the `href`, and put the
`→` arrow back inside the arrow span.

**To lock a lesson:** add ` locked` to the class, remove the `href`, and empty the
arrow span.

### Rules about locking

- **Never lock a lesson that is currently unlocked** unless I say so explicitly, by
  number. Students may be partway through it.
- If I say "unlock today's lesson" without a number, ask me which one. Don't guess
  from the date.
- Only change the lines I asked about. Leave every other lesson exactly as it is.

## Do not touch

- `SUBMIT_URL` in any practice file — that is the live Apps Script endpoint. If it
  changes, student work stops reaching the spreadsheet.
- The `ENGINE` section of any practice file (everything below the line that says
  "ENGINE — nothing below here needs editing").
- File names. The hub links to them by name.
- Question text, answers, or `accept` lists unless I ask for a specific change.

## If I ask for a new practice set

Copy an existing one, change only the `LESSON` block at the top, save it as the next
number (`0-07.html`, `0-08.html`...), and add a matching **locked** line to the hub.
New sets always start locked.
