export function Create() {
  return (
    <><div class="text-center flex-col flex m-auto justify-center ">
      <header class="">
        <h1>Create Your Own Card!</h1>
      </header>
      <section>
        <form  class="flex flex-col gap-4 mt-4">
          <label htmlFor="Character Name" class="">
            Character Name
            <input type="text" class="ml-4"></input>
          </label>
          <label htmlFor="Move 1 Name" class="">
            Move 1 Name
            <input type="text" class="ml-4"></input>
          </label>
          <label htmlFor="Move 2 Name" class="">
            Move 2 Name
            <input type="text" class="ml-4"></input>
          </label>
          <label htmlFor="Move 3 Name" class="">
            Move 3 Name
            <input type="text" class="ml-4"></input>
          </label>
          <label htmlFor="Move 4 Name" class="">
            Move 4 Name
            <input type="text" class="ml-4"></input>
          </label>
          <label htmlFor="Gmail" class="">
            Gmail
            <input type="email" class="ml-4"></input>
          </label>
          <label htmlFor="Move Images" class="">Move Images
            <button class="ml-4">Google Drive Picker</button>
          </label>
          <input type="submit" value="Create Card!" class=""></input>
        </form>
      </section></div>
    </>
  );
}
