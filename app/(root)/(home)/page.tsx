import React from "react";

import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import { QuestionProps } from "@/types";

const questions: QuestionProps[] = [
  {
    _id: "question1",
    title: "How to use TypeScript effectively?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "Programming" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2023-01-15"),
  },
  {
    _id: "question2",
    title: "Best practices for React state management?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag4", name: "State Management" },
    ],
    author: {
      _id: "author2",
      name: "Jane Smith",
      picture: "https://example.com/janesmith.jpg",
    },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date("2023-02-20"),
  },
  {
    _id: "question3",
    title: "How to deploy Node.js apps to AWS?",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "AWS" },
    ],
    author: {
      _id: "author3",
      name: "Michael Brown",
      picture: "https://example.com/michaelbrown.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2023-03-10"),
  },
  {
    _id: "question4",
    title: "Troubleshooting performance issues in Python scripts?",
    tags: [
      { _id: "tag7", name: "Python" },
      { _id: "tag8", name: "Performance" },
    ],
    author: {
      _id: "author4",
      name: "Emily Johnson",
      picture: "https://example.com/emilyjohnson.jpg",
    },
    upvotes: 20,
    views: 200,
    answers: [],
    createdAt: new Date("2023-04-05"),
  },
  {
    _id: "question5",
    title: "Secure authentication methods for web applications?",
    tags: [
      { _id: "tag9", name: "Security" },
      { _id: "tag10", name: "Authentication" },
    ],
    author: {
      _id: "author5",
      name: "Alex Turner",
      picture: "https://example.com/alexturner.jpg",
    },
    upvotes: 8,
    views: 80,
    answers: [],
    createdAt: new Date("2023-05-15"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />{" "}
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
