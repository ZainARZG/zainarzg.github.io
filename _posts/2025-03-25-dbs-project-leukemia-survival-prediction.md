---
layout: post
title: "The DBS Project That Took Us from TTS to Leukemia Survival Prediction"
date: 2025-03-25
article_num: 1
tags: [DBS, Project, ML, Leukemia, Database, DrBilalAhmad, MLwithDrBilalAhmad, MLProject]
cover_image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
cover_alt: "Microscope and laboratory equipment representing the medical research and ML analysis behind the DBS leukemia survival prediction project"
excerpt: "Our DBS project started with a TTS model idea that got rejected, went through multiple dataset attempts, and ended with a leukemia survival prediction system using 11 normalized tables and Ridge Regression."
---

The project announcement came in the middle of the semester, during one of the online classes that had become our new normal. **Dr. Bilal Ahmad** — a professor at UET Lahore, Faisalabad Campus, who specialises in AI, ML, and Deep Learning — gave us a surprisingly open-ended instruction: "You can train anything."

It sounded liberating at first. No rigid topic, no forced direction, no predefined problem. Just a blank slate and the expectation that we would build something meaningful. My group gathered immediately after class — excited, ambitious, and probably too confident. We wanted to build something impressive. Something that would stand out. In our collective enthusiasm, we decided on a Text-to-Speech model.

The logic seemed solid. TTS was a hot topic in AI. It combined deep learning with a practical application that everyone could appreciate. We started researching architectures — Tacotron, FastSpeech, WaveNet — and began imagining a system that could take text input and produce natural-sounding speech output. It felt like the kind of project that would impress anyone who saw it.

But when we presented the idea to Dr. Bilal Ahmad, he stopped us with a single concern: the project needed a database component.

A TTS model, no matter how sophisticated, did not naturally fit into a Database Systems course. There were no tables to design, no relationships to model, no normalization to perform, and no SQL queries to write. The training data would simply be audio files paired with text transcriptions — a flat, non-relational structure that would tell us nothing about database design. He was right. We had been so focused on building something technically impressive that we had forgotten the actual purpose of the course.

We went back to the drawing board. This time, the goal was clearer: find a dataset that could work for both machine learning and database design. I remember sitting at home, phone pressed to my ear, guiding my groupmate through Kaggle, the UCI Machine Learning Repository, and Google Dataset Search. We needed something with enough relational structure to normalize into multiple tables, while also having a clear prediction target for ML. It was a narrow intersection, and most datasets we found were either too simple or completely flat.

After considerable effort, we selected five candidate datasets and presented them to our instructor. He rejected all of them. His reasoning was blunt: "These are very popular datasets. I think other students have already chosen them."

That moment was frustrating, but looking back, it was also the most valuable lesson of the project. He was not being difficult for the sake of it. He wanted us to work on data that had genuine research credibility — something that had not been used by every other student before us. He opened cBioPortal on his screen, pointed to a leukemia dataset, and said: "Show me its research paper."

That sentence changed the direction of our entire project.

We explored the leukemia datasets on cBioPortal (Memorial Sloan Kettering Cancer Center) and found the TCGA-LAML dataset — The Cancer Genome Atlas for Acute Myeloid Leukemia. It contained clinical data for 200 real AML patients with 35 clinical attributes, published in the New England Journal of Medicine, 2013. The dataset had everything we needed: a clear relational structure (patients, doctors, departments, clinical records, lab results, treatments, outcomes) and a well-defined prediction target (Overall Survival in months). When we presented it to Dr. Bilal Ahmad with the research paper in hand, he approved.

The next phase was the most intense part of the project. We took the raw CSV file — a flat, denormalized format with 54 columns — and decomposed it into 11 normalized relational tables following Third Normal Form. The entities included Patient, Doctor, Department, Sample, Cancer_Type, Clinical, Cytogenetics, Risk, Lab_Results, Treatment, and Outcome, each connected through foreign key constraints that ensured referential integrity. We implemented the entire schema in MySQL Workbench with proper data types and constraints, then wrote SQL queries using SELECT with multiple JOINs to export a combined dataset for machine learning.

The exported dataset underwent extensive preprocessing. We dropped columns that were artifacts of the database structure or would cause data leakage, handled missing values using mode imputation for categorical columns and median imputation for numeric columns, and encoded categorical variables using LabelEncoder. The final dataset was split into training (75%) and testing (25%) sets.

For model training, we implemented three regression models using scikit-learn: Linear Regression with Ridge regularization (L2), a Decision Tree Regressor, and a Random Forest Regressor. Each model was trained to predict Overall_Survival_Months based on clinical features like age, white blood cell count, bone marrow blast percentage, and mutation count.

The results were revealing. Ridge Regression outperformed both tree-based models with an R² score of 0.2814 and a Mean Absolute Error of 8.23 months. The Decision Tree Regressor performed worst with a negative R² score, indicating overfitting on the small dataset. The Random Forest showed improvement over the single tree but still underperformed compared to the linear model. This taught us something important: for small datasets with approximately linear relationships, simpler models often outperform complex ensemble methods.

We built an inference script that could predict survival on new patient records by loading the trained model and applying the same preprocessing pipeline. Then we wrapped everything in a FastAPI web application with a responsive HTML dashboard — a dark-glass interface where users could input clinical parameters and select which model to use for prediction. The frontend communicated with the backend through fetch requests and displayed the predicted survival in months.

Looking back, this project taught me more about real-world data science than any textbook could. It taught me that dataset selection is not just a technical decision — it is a research decision that affects the credibility of everything that follows. It taught me that normalization is not an academic exercise but a practical necessity for data integrity. And it taught me that the best-performing model is not always the most complex one.

Explore his work on [Google Scholar](https://scholar.google.com.au/citations?user=8nZ0jVkAAAAJ&hl=en). His emphasis on using credible, real-world datasets with genuine research backing is a standard I now apply to every project I undertake.

The project ended as a complete end-to-end pipeline: from raw CSV to normalized database to SQL export to preprocessing to model training to web deployment. But the most valuable output was not the model or the dashboard — it was the understanding that data quality, research credibility, and thoughtful design matter far more than technical flashiness.

#MLwithDrBilalAhmad #DrBilalAhmad #MLProject
