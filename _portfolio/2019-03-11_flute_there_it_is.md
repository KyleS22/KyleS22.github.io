---
title: "Flute! (There it is)"
excerpt: "A machine learning project in classifying audio."

header:
  image: /assets/images/FluteThereItIsHeader.png
  teaser: /assets/images/FluteThereItIsTeaser.png

permalink: /flute_there_it_is

author_profile: true

tags: [Python, Machine Learning, Music, Audio Analysis, Recurrent Neural Network, Hidden Markov Model, Classification, Course Projects]

date: 2019-04-15
---

_Flute! (There it is)_ is a project for _CMPT 820: Topics in Intelligence and Learning_, a course about machine learning approaches. At the graduate level, students are required to implement a project that applies machine learning in some way.  My partner and I both like music, so we decided to work on an audio classification project.  To keep things simple, our project focuses on two approaches to classifying audio clips as either containing a flute or not containing a flute. While my partner worked on training a Hidden Markov Model, I worked at training a Recurrent Neural Network.

I chose to work with a Recurrent Neural Network for this problem because of their ability to work with time series data.  Recurrent Neural Networks allow previous states of the model to influence future states of the model, taking advantage of information that was processed at a previous time stamp in the input.  I trained an architecture that made use of Long Short Term Memory (LSTM) units, which further allow the network to manage time series data by selectively forgetting parts of previous input.  The idea was that this would allow an audio sample to be processed by the network in a way that could isolate the digital signature of a flute across time.  

Overall, our project did not give any groundbreaking results, but as a first time attempt at machine learning for both my partner and I, it provided many opportunities to learn about the inner mechanics of machine learning.

Check out the [Repository](https://github.com/peggyopal/flutethereitis){:target="_blank"}.
