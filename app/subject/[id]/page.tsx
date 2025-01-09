import { subjects, subjectResources } from '@/lib/data';
import SubjectContent from '@/components/subject/subject-content';

// Required for static site generation with dynamic routes
export function generateStaticParams() {
  return subjects.map((subject) => ({
    id: subject.id,
  }));
}

export default function SubjectPage({ params }: { params: { id: string } }) {
  const subject = subjects.find(s => s.id === params.id);
  const subjectName = subject ? subject.name : "Subject";

  return <SubjectContent id={params.id} subjectName={subjectName} />;
}