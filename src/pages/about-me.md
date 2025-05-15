import useBaseUrl from '@docusaurus/useBaseUrl';

<div
  style={{
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',     /* stacks cleanly on phones */
  }}
>
  {/* ─────────── text ─────────── */}
  <div style={{flex: 2}}>
    <h2 id="vadym-sachenko">Vadym Sachenko</h2>

    <p>
      Hello there! My name is Vadym Sachenko, and I'm a technical writer based
      in Ukraine.
    </p>

    <p>
      <strong>TechWriteIt</strong> is my knowledge base where I share
      experiences and insights. I maintain this website as a platform to
      organize my work and help fellow technical writers.
    </p>

    <p>
      If you'd like to connect with me, please visit the{' '}
      <a href="/pages/contact">Contact</a> page.
    </p>
  </div>

  {/* ────────── avatar ────────── */}
  <img
    src={useBaseUrl('/pages/about-me/avatar.png')}
    alt="Portrait of Vadym Sachenko"
    style={{
      flex: 1,
      maxWidth: 300,
      borderRadius: '2%',
    }}
  />
</div>
