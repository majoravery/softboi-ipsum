import React, { createElement, useState, useEffect } from 'react';

import useBeamer from './useBeamer';

const MIN_CHAR_IN_PARAGRAPH = 500;

const emotions = [
  "happiness is a warm book",
  "I mean if you can't feel the spiritual connection in that song then do you even feel music on a level you know",
  "melancholy",
  "I say sorry a lot, its odd, then again lots of things are odd about me but I like being kind of different",
  "opening minds and throwing away the key",
  "you look like a sociopathic mess and I love it",
  "I haven't been happy in a long time",
  "my IQ is 149 not 2",
  "please tell me you've watched pulp fiction",
  "avoiding the void",
  "I'm delicate like a sea sponge",
  "shrooms, orange juice, cough syrup, love",
  "I'm like a pomegranate",
  "Mac Demarcus",
  "people are the strangest creatures",
  "am a zoot bunner",
  "you ever heard of manchester and the hacienda",
  "unblock me on instagram",
  "fuck medical textbooks let's go to Berlin",
  "a good piece of art should make you wanna kill yourself",
  "did I mention that I cry",
  "tranquil",
  "your bleak millennial cynicism",
  "do you detest",
  "I can't drown my demons, they know how to swim and they sniff ketamine",
  "perfect blend",
  "I have a musky, manly smell and the way to my heart is through mazes",
  "certain eyes speak decipherable codes",
  "I'm quite acidy",
  "maybe some time we can strum a guitar together naked in bed",
  "manic pixie dream girl",
  "all of us is just insignificant in the grand scheme of things",
  "to semi quote Wilde",
  "so underrated",
  "strum me like a guitar",
  "chainsmoking and binge drinking",
  "what's your view on Marxism",
  "u intrigue me ever so slightly",
  "thoughts on yoko ono, also, thoughts on mushrooms",
  "your face betrays the sense of innocence",
  "Mac Demarcoy vibes",
  "it's so hard being an eclectic sometimes",
  "your hair is like thin strands of gold",
  "hmu if you want to talk about how much fo a babe Francoise Hardy is",
  "tbh yes I l o v e ket",
  "you were in my dreams last nite we bunned zoots it was calm",
  "excuse me for thinking you were the one or whatever",
  "all of the above with a side of coke",
  "not enough people read Allen Ginsberg and it pains me",
  "idk feel like people are meant to be sad",
  "I think I need stroking to sleep but might have a kebab",
  "do you think society never made progress till this day",
  "odd shoegaze",
  "as if you know about Berghain, are you into techno",
  "indie scum",
  "fuck drugs make music",
  "I think you seem pretty a e s t h e t i c",
  "art is mine I think, I just can't live off of art",
  "I'm quite decent, I'll play you some king krule some time",
  "just illegal shit, no biggie",
  "etherial",
  "black coffee and anxiety",
  "life's about clashing perceptions",
  "we're so used to our own existence",
  "the only way I feel comfortable enough to convey emotions and intimacy is through drugs",
  "what about jean luc godards 1960 classic 'a bout de souffle'",
  "I feel like you aren't interested in me intellectually",
  "hopeless romantic",
  "have you heard of tame impala",
  "I, however, am completely different",
  "maybe come back in a few years when we are older and wiser and find our kindlings again",
  "complexless and emotional",
  "I got bullied for so long that I realised how the world works",
  "low-key alcoholic",
  "you are as much part of my life as smoking cigarettes",
  "may grow a small beard",
  "there is a spectre haunting me",
  "yes I have done acid, standing beneath a morton bay fig tree",
  "ok baby I understand but can we still be friends",
  "I wanna see your daddy issues",
  "female orgasms are the best sounds on the planet after pink floyd",
  "but I'm more edge than softboi",
  "wanna thrift, get food and sit on my face",
  "conversations with me can be unusual but just go with it",
  "wow I was just tryna bang u before but now can you be my therapist",
  "when I thought about how we can't be together among very real and serious thoughts that made me cry",
  "can't you consider that I might have feelings",
  "I want to drink tea and share comments and observations",
  "smashed some pints and some lines",
  "you can't really find real underground kvlt shit with apps you need someone with insider street knowledge to share it with you",
  "I wanna make a religion with you",
  "let me worship you",
  "being on acid is badass",
  "we could self loathe and pretend we're cool",
  "I pursue beautiful women and even more beautiful poetry",
  "tell me about central saint martins",
  "we call it rockar cannibis club rcc where we smoke all these foreign buds",
  "pulchritudinous log-lady",
  "archetypal representation of a certain energy in the dream scape",
  "we are but ships that pass in the night",
  "quite mad how psychedelic album lonersism album art is the same park I took acid in",
  "I'll say my final piece with words penniless in the whispers of night",
  "mountain solitudes",
  "profound sleeps",
  "image coitions with ideal women of an impossible beauty",
  "this one is a notion about the unique value of people we don't know well",
  "ecclesiastical",
  "well-buttered lima beans",
  "amorous sports",
  "ponderous young soul seeking somebody to ponder with",
  "I do not know you in the traditional sense of the world nor in any other conventional mode of understanding",
  "I'm romantic because I'm a scorpio",
  "we will walk arm in arm between terrific avenues of concrete skyscrapers",
  "I might have to console myself with imagined coitons with an impossible soul such as yourself",
  "these are just things I contemplate especially while communicating with a stranger",
  "the pity it is to be obstructed by screens and superficiality",
  "my life revolves around consuming music",
  "iambic and pentameter-boom",
  "nothing is objectively happy or sad",
  "opening minds and throwing away the key",
  "existence is generally quite a strenuous exercise though tbf",
  "currently writing an essay on Camus and absurdism",
  "drinking lemon san pellegrino with ice out of a mason jar",
  "I hate the life I chose to lead",
  "on nights like these the ice cream isn't the only thing that's a little half baked",
  "your lips could define you alone",
  "and when it rains it fuckin pours",
  "now what's done is done I guess time will tell, and so time has told",
  "my words speak for me",
  "I am the individual so I will be the individual",
  "I just wish you cared I guess"
];

function getCries(paragraphs) {
  let cries = [];

  for (let i = 1; i <= paragraphs; i++) {
    let cry = '';

    while (cry.length < MIN_CHAR_IN_PARAGRAPH) {
      cry = cry.concat(' ', emotions[Math.floor(Math.random() * emotions.length)]);
    }

    cries.push(cry.concat('.'));
  }

  return cries;
}

export default function SoftboiIpsum() {
  const [beam, beamSelector] = useBeamer(1);
  const initialCry = getCries(beam);
  const [output, setOutput] = useState(initialCry);

  useEffect(
    () => {
      const cries = getCries(beam);
      setOutput(cries);
    },
    [beam]
  );

  return (
    <section className="container">
      <div className="about">
        <h1 className="headline">softboi ipsum</h1>
        <p className="subline">compact heart n emotions generator for all ur indie boy needs! (adjust scrobble for desired length of emotions)</p>
      </div>
      <div className="beamerWrap">
        {beamSelector}
      </div>
      <div className="cries">
        {output.map((o, i) => createElement("p", { className: "cry", key: i }, o) )}
      </div>
      <div className="credit">
        <img className="pomo" src="./pomo.png" alt="im a pomegranate" />
        <p>made by avery</p>
        <p>quotes from <a href="https://www.instagram.com/beam_me_up_softboi/" target="_blank" rel="noopener noreferrer">beam_me_up_softboi</a></p>
      </div>
    </section>
  );
}
