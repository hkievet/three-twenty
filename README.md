# ThreeTwenty

I wanted to created a collection of UI elements.

- All elements fit within 320px
- Allow for reuse in other projects
- All CSS besides font classes must be doen with emotion

By doing this, I'm hoping to have a nice sandbox for creating little apps to showcase my skills for recruiters.

# Adding a Page

Add the page under ./components/pages/
Add metadata for page to ./data/index.tsx

```
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
    </ThreeTwentyContainer>
  )
```
