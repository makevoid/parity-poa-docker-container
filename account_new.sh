#!/bin/bash
/usr/bin/expect <<xpect
  # exp_internal 1 ;# debug
  spawn /build/parity/target/release/parity account new

  expect "assword"
  send "foo\n"
  expect "assword"
  send "foo\n"

  expect eof
xpect
