use anchor_lang::prelude::*;

#[constant]
pub const USER_TAG : &[u8] = b"USER_STATE";

#[constant]
pub const ADD_FRIEND : &[u8] = b"FRIEND_STATE";

#[constant]
pub const STATUS_TAG : &[u8] = b"STATUS_STATE";

#[constant]
pub const VIDEO_TAG : &[u8] = b"VIDEO_STATE";

#[constant]
pub const ADD_LIKE : &[u8] = b"LIKE_STATE"