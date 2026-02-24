let renderLogs = [];

export default function ImpureComponent() {
  // This is a side effect because it modifies a variable
  // outside of the component's scope during render.
  renderLogs.push('Component rendered');

  console.log('Render logs:', renderLogs);

  return (
    <div>
      <h2>Impure Component Example</h2>
      <p>Check the browser console to see the render logs.</p>
      <p>With StrictMode, this component will render twice on initial load, and you will see two log entries instead of one.</p>
    </div>
  );
}
