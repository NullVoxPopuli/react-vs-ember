render() {
  const { clickCount, multiplier } = this.state;

  return (
    <>
      <button onClick={this.increment}>Add</button>
      <button onClick={this.decrement}>Subtract</button>

      <br /><br /> Multiplier
      <input type='number'
        value={multiplier}
        onChange={this.changeMultiplier}
      />

      <p>
        {clickCount} * {multiplier} == {this.double}
      </p>
    </>
  );
}
