---
title: "Clump It Up!"
excerpt: "An automated system for counting emergence of plants."

header:
  image: /assets/images/ClumpItUpHeader.png
  teaser: /assets/images/ClumpItUpTeaser.png

permalink: /clump_it_up

author_profile: true

tags: [Course Projects, Python, Machine Learning, Image Processing, Automated Agriculture, P2IRC, Object Detection, Segmentation]

date: 2019-08-01
---

Clump It Up! was a course project for _CMPT 898: Automated Agricultural Analysis_, part of my M.Sc course requirements.  The course pairs together students from Computer Science with students from Agriculture to try to solve a problem related to automating analysis of agricultural data.  These projects contribute to the [P2IRC Project](https://p2irc.usask.ca/){:target="_blank"} at the University of Saskatchewan.  For our project, we worked on automatically counting emergence of _brassica carinata_ plants in a field.  We obtained a dataset of images taken from the [Protractor System](https://openaccess.thecvf.com/content_CVPRW_2019/html/CVPPP/Higgs_ProTractor_A_Lightweight_Ground_Imaging_and_Analysis_System_for_Early-Season_CVPRW_2019_paper.html){:target="_blank"} which drove across a field, taking images as it went.  

We decided that it would be easier to count plants in a small area of the whole image, rather than trying to train a network to count all the plants in a large image.  To accomplish this, we devised a pipeline that was made up of two steps: detection and cropping of plant "clumps", and counting of plants within a single "clump".  We tried a few different methods for each step.  To accomplish detection of "clumps" we applied an Excess Green Threshold, Faster RCNN, the YOLO architecture, and a U-Net architecture.  For counting of plants within a clump, we trained some simple machine learning classifiers, namely K-Nearest Neighbours, Support Vector Machine, and Gaussian Naive Bayes.  We also attempted counting using a basic CNN architecure and a Capsule Network.  The multitude of approaches gave each member of the group plenty to work on, and gave us a unique opportunity to compare some different approaches to a single problem.  

My contributions to the project were managing the dataset and coordinating annotations, documenting the project, and training and testing some simple encoder-decoder networks that directly output the number of plants in a given image.  I also presented a poster about our project at the 4th annual P2IRC symposium, in Saskatoon SK, which won the best poster award.     

Check out the [Repository](https://github.com/KyleS22/Plant_Clump_Counting/tree/development){:target="_blank"}
