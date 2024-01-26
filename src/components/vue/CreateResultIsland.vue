<template>
  <h1 class="text-2xl font-bold">Create Measurement</h1>
  <section class="flex gap-x-4">
    <form class="flex flex-col gap-y-4 w-[400px] border border-primary p-4 my-4 rounded-lg">
      <h2 class="font-bold">Save record</h2>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Framework</span>
        </div>
        <select class="select select-secondary select-bordered">
          <option disabled selected>Pick one</option>
          <option>Solid</option>
          <option>React</option>
        </select>
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Value</span>
          <span class="label-text-alt">In miliseconds</span>
        </div>
        <input type="number" placeholder="Write value..." min=0 class="input input-secondary input-bordered w-full max-w-xs" />
      </label>
      <button class="btn btn-secondary w-[200px]">Save measurement</button>
    </form>
    <div class="flex flex-col justify-between backdrop:gap-y-4 w-[400px] border border-primary p-4 my-4 rounded-lg">
      <h2 class="font-bold">Record preview</h2>
      <div>
        Here we will have table alla excel for measurement records...
      </div>
      <button class="btn btn-secondary w-[200px]">Create performance result</button>
    </div>
  </section>
</template>