import React from 'react';

const App = () => {
  return (
    <form class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="col-md-6">
        <label for="age" class="form-label">
          Age
        </label>
        <input type="number" class="form-control" id="age" />
      </div>
      <div class="col-md-6">
        <label for="country" class="form-label">
          Country
        </label>
        <input type="text" class="form-control" id="country" />
      </div>
      <div class="col-md-6">
        <label for="position" class="form-label">
          Position
        </label>
        <input type="text" class="form-control" id="position" />
      </div>
      <div class="col-md-6">
        <label for="wage" class="form-label">
          Wage
        </label>
        <input type="number" class="form-control" id="wage" />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default App;
