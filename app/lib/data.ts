import prisma from "@/prisma/prisma"

export default async function fetchSearchQuestions(query?: string) {
  let searchResults:{question:string,id:number}[] = [] ;
  try {
    prisma.$connect();
    searchResults = await prisma.$queryRaw`
    SELECT question , id FROM Code
    WHERE question LIKE  CONCAT('%', ${query}, '%');`;
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
  finally {
    await prisma.$disconnect();}
  return searchResults;
}

export async function fetchTopTen() {
   

    prisma.$connect();
        try {

          const latestQuestions = await prisma.code.findMany({
            orderBy: {
              id: 'desc', 
            },
            take: 10, 
          });
          return latestQuestions;
        } catch (error) {
          console.error('Error fetching latest 10 posts:', error);
        } finally {
          await prisma.$disconnect();
        }
      

}

export async function fetchQuestion(id: string) {
    prisma.$connect();

    try {

      const question = await prisma.code.findFirst({
        where: {
          id: Number(id),
        },
      });
  
        return question;
      
    } catch (error) {
      console.error('Error fetching question:', error);
    } finally {
      await prisma.$disconnect();
    }
}

export function fetchMyuploads() {
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