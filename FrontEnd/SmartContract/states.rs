use anchor_lang::prelude::*;

#[account]
#[derive(Default)]

pub struct UserProfile {
    pub authority: Pubkey,
    pub name: String,
    pub age: String,
    pub status_index : u8,
    pub status_count : u8,
    pub video_index : u8,
    pub gender: String,
    pub profile_url: String,
    pub wallet_address: Pubkey,
    pub total_friend: u8,
    pub country: String,
    pub description: String,
    pub init_time: i64,
}

#[account]
#[derive(Default)]

pub struct FriendAccount {
    pub authority: Pubkey,
    pub name: String,
    pub age: String,
    pub gender: String,
    pub profile_url: String,
    pub description : String,
    pub index : u8,
    pub country : String,
}

#[account]
#[derive(Default)]
pub struct StatusAccount {
    pub authority : Pubkey,
    pub status : String,
    pub name : String,
    pub profile_url : String,
    pub status_index : u8,
    pub init_time : i64,
}

#[account]
#[derive(Default)]

pub struct VideoAccount {
    pub authority : Pubkey,
    pub content : String,
    pub user_name : String,
    pub description : String,
    pub video_index : u8,
    pub profile_url : String,
}

