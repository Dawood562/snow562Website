export default function ProjectPage({ params: { name } }: { params: { name: string } }) {
  return (
    <main>
      <h1>Project: {name}</h1>
      <p>This page is showing details for project "{name}".</p>
    </main>
  );
}
