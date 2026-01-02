import bcrypt from 'bcrypt';

test('bcrypt hash and compare works', async () => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash('secret', salt);
  const match = await bcrypt.compare('secret', hash);
  expect(match).toBe(true);
});
