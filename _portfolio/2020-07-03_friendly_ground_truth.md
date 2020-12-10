---
title: "Friendly Ground Truth"
excerpt: "A tool for annotation of root system images."

header:
  image: /assets/images/FGTHeader.png
  teaser: /assets/images/FGTTeaser.png

permalink: /friendly_ground_truth_portfolio

author_profile: true

tags: [Python, Tools, Image Processing, Image Annotation, Root System Analysis, Unit Testing]

date: 2020-07-03
---

_Friendly Ground Truth_ is an annotation tool I designed to facilitate creation of a dataset for my M.Sc. research.  I designed it to be a fast and consistent way to produce manual ground truth binary segmentations of many images of plant roots.  The program works by breaking up the loaded image into small patches, allowing the user to focus on a single part of the image to get an accurate segmentation.  It provides a brush tool for painting in foreground regions, and a flood tool that allows the user to click on a foreground area and "grow" the selection to match the area that should be marked as foreground in an intelligent way that prevents background from being selected. Once all patches of the image have been annotated, the ground truth segmentation is stitched together into a full image that can then be used for algorithm testing. 

I used python to implement this project because I was familiar with the available image processing libraries, and I needed to produce the tool quickly.  The Tkinter library is used to implement the user interface.  The repository contains automated tests and build directives that use pyinstaller to produce an executable file or installer for Windows and Linux, which are automatically added to a release that can be downloaded by the user. It is still under development, and is more of a prototype than a completed project, but I have used the tool successfully to build a dataset of ground truth segmentations for my research.  I hope to spend some time in the future addressing some performance issues with the program, finishing up system testing, or possibly re-implementing in C++ to produce a polished version of the software that can be used reliably by other researchers.

![Friendly Ground Truth](/assets/images/FGTInterface2.png "The interface.")
![Friendly Ground Truth](/assets/images/FGTInterface.png "An example of an image before annotation.")


Check out the [Repository](https://github.com/KyleS22/friendly_ground_truth){:target="_blank"}
