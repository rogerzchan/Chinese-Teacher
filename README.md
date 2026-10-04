# Chinese-Teacher

Casual Chinese conversations with pinyin over every character, English underneath, and notes on the stuff a textbook won't teach you.

Live page: https://rogerzchan.github.io/Chinese-Teacher/

## Files

- `index.html` is the layout and styling. You shouldn't need to touch it.
- `stories.js` holds all the conversations. Edit this one to change or add content.

## Parts

1. **With friends** (stories 1 to 7): airport pickup, picking food, the bill, DiDi, drinks, the dating question, goodbye
2. **At the restaurant** (8 to 11): walking in, asking for recommendations, chatting with the owner, leftovers and paying
3. **Being a tourist** (12 to 15): directions, haggling, getting your photo taken, bubble tea

## Editing format

```js
["who", "我|wǒ/叫|jiào/个|ge/车|chē/啊|a/。|", "I'll order a car."]
```

Chunks are separated by `/`. Each chunk is `characters|pinyin`. Punctuation has nothing after the bar.
