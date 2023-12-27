export default function fetchQuestions(a: string) {
    if (a == "semaphore") {
        return [
            { ques: "what is perceptron?", id: "1" }, { ques: "what is semaphore?what is semaphore?what is semaphore?what is semaphore?", id: "2" }, { ques: "what is mutex", id: "3" }
        ]
    }
    else return []
}

export function fetchTopTen() {
    return [
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
        { ques: "what is perceptron?", answer: "1" }, { ques: "what is semaphore?", answer: "2" }, { ques: "what is mutex", answer: "3" },
    ]
}
